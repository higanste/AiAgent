'use client'

import { motion } from 'framer-motion'
import { Download, Sparkles, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Extension() {
  const [downloaded, setDownloaded] = useState(false)

  const steps = [
    {
      number: 1,
      title: 'Download the Extension',
      description: 'Click the download button below to get the extension package',
    },
    {
      number: 2,
      title: 'Extract the ZIP File',
      description: 'Extract the downloaded ZIP file to a folder on your computer',
    },
    {
      number: 3,
      title: 'Open Microsoft Edge',
      description: 'Launch Microsoft Edge browser on your computer',
    },
    {
      number: 4,
      title: 'Go to Extensions',
      description: 'Click the three dots (⋯) menu → Extensions → Manage extensions',
    },
    {
      number: 5,
      title: 'Enable Developer Mode',
      description: 'Toggle the "Developer mode" switch in the bottom left corner',
    },
    {
      number: 6,
      title: 'Load Unpacked',
      description: 'Click "Load unpacked" and select the extracted extension folder',
    },
    {
      number: 7,
      title: 'Start Using',
      description: 'The extension is now installed! Click the Rtrvr icon in your toolbar',
    },
  ]

  const handleDownload = () => {
    setDownloaded(true)
    // In a real scenario, this would trigger a download
    // For now, we'll create the extension files
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-bold text-white">Rtrvr</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/extension"
                className="text-white/80 hover:text-white transition-colors"
              >
                Extension
              </Link>
              <Link
                href="/about"
                className="text-white/80 hover:text-white transition-colors"
              >
                About
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Microsoft Edge Extension
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Install the Rtrvr extension to use AI agent capabilities on any website
          </p>
          <motion.a
            href="/extension/rtrvr-extension.zip"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
          >
            <Download className="w-5 h-5" />
            <span>Download Extension</span>
          </motion.a>
        </motion.div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Installation Steps
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            ⚠️ Coming Soon
          </h2>
          <p className="text-white/80 mb-4">
            The extension is currently in development and will be available for download soon.
            Check back later or use the web version in the meantime!
          </p>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span>Go to Web Version</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

