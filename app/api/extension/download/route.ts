import { NextRequest, NextResponse } from 'next/server'
import { existsSync, readdirSync, statSync, readFileSync } from 'fs'
import { join } from 'path'
import archiver from 'archiver'

export async function GET(request: NextRequest) {
  try {
    const extensionPath = join(process.cwd(), 'extension')
    
    // Check if extension directory exists
    if (!existsSync(extensionPath)) {
      return NextResponse.json(
        { error: 'Extension not found' },
        { status: 404 }
      )
    }

    // Create a readable stream for the response
    const stream = new ReadableStream({
      async start(controller) {
        const archive = archiver('zip', {
          zlib: { level: 9 }
        })

        archive.on('error', (err) => {
          console.error('Archive error:', err)
          controller.error(err)
        })

        archive.on('end', () => {
          controller.close()
        })

        // Pipe archive data to the stream
        archive.on('data', (chunk) => {
          controller.enqueue(chunk)
        })

        // Function to recursively add files
        function addDirectory(dirPath: string, basePath: string = '') {
          try {
            const items = readdirSync(dirPath)
            
            for (const item of items) {
              const fullPath = join(dirPath, item)
              const relativePath = basePath ? `${basePath}/${item}` : item
              
              try {
                const stat = statSync(fullPath)
                
                if (stat.isDirectory()) {
                  // Skip unnecessary folders
                  if (item !== 'node_modules' && !item.startsWith('.') && item !== 'dist') {
                    addDirectory(fullPath, relativePath)
                  }
                } else {
                  // Add file to archive
                  const fileContent = readFileSync(fullPath)
                  archive.append(fileContent, { name: relativePath })
                }
              } catch (err) {
                console.warn(`Skipping ${fullPath}:`, err)
              }
            }
          } catch (err) {
            console.error(`Error reading directory ${dirPath}:`, err)
          }
        }

        // Add all files from extension directory
        addDirectory(extensionPath)

        // Finalize the archive
        await archive.finalize()
      }
    })

    // Return the stream as a ZIP download
    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="rtrvr-extension.zip"',
      },
    })
  } catch (error: any) {
    console.error('Extension download error:', error)
    
    // Fallback response
    return NextResponse.json(
      { 
        error: 'Failed to create extension ZIP',
        message: 'Please try downloading from GitHub',
        githubUrl: 'https://github.com/higanste/AiAgent/tree/main/extension'
      },
      { status: 500 }
    )
  }
}
