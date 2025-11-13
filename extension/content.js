// Content script that runs on all pages

// Listen for messages from popup or background
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getPageInfo') {
    sendResponse({
      url: window.location.href,
      title: document.title,
      text: document.body.innerText.substring(0, 1000), // First 1000 chars
    });
  }

  if (request.action === 'highlight') {
    highlightElement(request.selector);
    sendResponse({ success: true });
  }

  if (request.action === 'scrollTo') {
    const element = document.querySelector(request.selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      sendResponse({ success: true });
    } else {
      sendResponse({ success: false, error: 'Element not found' });
    }
  }

  return true;
});

function highlightElement(selector) {
  // Remove previous highlights
  document.querySelectorAll('.rtrvr-highlight').forEach(el => {
    el.classList.remove('rtrvr-highlight');
  });

  const element = document.querySelector(selector);
  if (element) {
    element.classList.add('rtrvr-highlight');
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Remove highlight after 3 seconds
    setTimeout(() => {
      element.classList.remove('rtrvr-highlight');
    }, 3000);
  }
}

// Inject CSS for highlighting
const style = document.createElement('style');
style.textContent = `
  .rtrvr-highlight {
    outline: 3px solid #9333ea !important;
    outline-offset: 2px !important;
    background-color: rgba(147, 51, 234, 0.1) !important;
    transition: all 0.3s ease !important;
  }
`;
document.head.appendChild(style);

