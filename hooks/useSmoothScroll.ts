import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    // Function to handle anchor link clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      // Check if this is a "scroll to top" anchor
      if (anchor.getAttribute('href') === '#' && anchor.closest('[data-scroll-to-top="true"]')) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      
      // Check if the link is an anchor link (starts with #)
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      // Prevent default behavior
      e.preventDefault();
      
      // If the href is just "#", scroll to top
      if (href === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      
      // Get the target element
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Smooth scroll to the target element
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without refresh
        window.history.pushState(null, '', href);
      }
    };

    // Add event listener to document body
    document.body.addEventListener('click', handleAnchorClick);
    
    // Cleanup function
    return () => {
      document.body.removeEventListener('click', handleAnchorClick);
    };
  }, []);
}
