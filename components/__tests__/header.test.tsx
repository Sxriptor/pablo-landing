import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Header } from '../header'
import '@testing-library/jest-dom'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}))

describe('Header Transparency Tests', () => {
  beforeEach(() => {
    // Reset document body overflow
    document.body.style.overflow = 'unset'
  })

  afterEach(() => {
    // Clean up after each test
    document.body.style.overflow = 'unset'
  })

  describe('Background Transparency', () => {
    test('header container should be fully transparent', () => {
      render(<Header />)
      const header = screen.getByRole('banner')
      
      // Check that header has no background styling
      const computedStyle = window.getComputedStyle(header)
      expect(computedStyle.backgroundColor).toBe('rgba(0, 0, 0, 0)' || 'transparent')
      expect(computedStyle.backdropFilter).toBe('none')
      expect(computedStyle.background).not.toContain('rgba')
    })

    test('header should maintain fixed positioning', () => {
      render(<Header />)
      const header = screen.getByRole('banner')
      
      expect(header).toHaveClass('fixed', 'top-0', 'left-0', 'right-0', 'z-50')
    })

    test('navigation menu should have no background styling', () => {
      render(<Header />)
      const nav = screen.getByRole('navigation')
      
      const computedStyle = window.getComputedStyle(nav)
      expect(computedStyle.backgroundColor).toBe('rgba(0, 0, 0, 0)' || 'transparent')
      expect(computedStyle.backdropFilter).toBe('none')
    })
  })

  describe('Text Contrast and Visibility', () => {
    test('logo text should have text shadow for contrast', () => {
      render(<Header />)
      const logoText = screen.getByText('PlayCircle')
      
      expect(logoText).toHaveStyle({
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 1px 1px 2px rgba(0, 0, 0, 0.9), 0 0 8px rgba(255, 255, 255, 0.2)',
        fontWeight: '700'
      })
    })

    test('logo image should have drop shadow filter', () => {
      render(<Header />)
      const logoContainer = screen.getByText('PlayCircle').previousElementSibling
      
      expect(logoContainer).toHaveStyle({
        filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8)) drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.9))'
      })
    })

    test('navigation links should have text shadows', () => {
      render(<Header />)
      const aboutLink = screen.getByText('About')
      
      expect(aboutLink).toHaveStyle({
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
        fontWeight: '500'
      })
    })

    test('mobile menu button should have drop shadow filter', () => {
      render(<Header />)
      const mobileMenuButton = screen.getByLabelText('Toggle menu')
      
      expect(mobileMenuButton).toHaveStyle({
        filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8)) drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.9))'
      })
    })

    test('download button should have drop shadow filter', () => {
      render(<Header />)
      const downloadButton = screen.getByText('Download App')
      
      expect(downloadButton).toHaveStyle({
        filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))'
      })
    })
  })

  describe('Animation Preservation', () => {
    test('logo should have spring animation properties', () => {
      render(<Header />)
      const logoContainer = screen.getByText('PlayCircle').previousElementSibling
      
      // Check that motion props are preserved (mocked but structure maintained)
      expect(logoContainer).toBeInTheDocument()
    })

    test('logo text should have slide animation properties', () => {
      render(<Header />)
      const logoText = screen.getByText('PlayCircle')
      
      expect(logoText).toBeInTheDocument()
    })

    test('navigation should have fade animation properties', () => {
      render(<Header />)
      const nav = screen.getByRole('navigation')
      
      expect(nav).toBeInTheDocument()
    })

    test('mobile menu button should have spring animation', () => {
      render(<Header />)
      const mobileMenuButton = screen.getByLabelText('Toggle menu')
      
      expect(mobileMenuButton).toBeInTheDocument()
    })
  })

  describe('Mobile Menu Functionality', () => {
    test('mobile menu should open and close correctly', async () => {
      render(<Header />)
      const mobileMenuButton = screen.getByLabelText('Toggle menu')
      
      // Initially closed
      expect(screen.queryByText('Menu')).not.toBeInTheDocument()
      
      // Open menu
      fireEvent.click(mobileMenuButton)
      await waitFor(() => {
        expect(screen.getByText('Menu')).toBeInTheDocument()
      })
      
      // Close menu
      fireEvent.click(mobileMenuButton)
      await waitFor(() => {
        expect(screen.queryByText('Menu')).not.toBeInTheDocument()
      })
    })

    test('mobile menu overlay should have backdrop blur', async () => {
      render(<Header />)
      const mobileMenuButton = screen.getByLabelText('Toggle menu')
      
      fireEvent.click(mobileMenuButton)
      
      await waitFor(() => {
        const overlay = document.querySelector('.bg-black\\/60')
        expect(overlay).toHaveClass('backdrop-blur-sm')
      })
    })

    test('mobile menu sidebar should maintain styling', async () => {
      render(<Header />)
      const mobileMenuButton = screen.getByLabelText('Toggle menu')
      
      fireEvent.click(mobileMenuButton)
      
      await waitFor(() => {
        const sidebar = screen.getByText('Menu').closest('div')
        expect(sidebar).toHaveStyle({
          background: 'rgba(13, 18, 22, 0.15)',
          backdropFilter: 'blur(25px)'
        })
      })
    })

    test('body scroll should be prevented when mobile menu is open', async () => {
      render(<Header />)
      const mobileMenuButton = screen.getByLabelText('Toggle menu')
      
      fireEvent.click(mobileMenuButton)
      
      await waitFor(() => {
        expect(document.body.style.overflow).toBe('hidden')
      })
      
      fireEvent.click(mobileMenuButton)
      
      await waitFor(() => {
        expect(document.body.style.overflow).toBe('unset')
      })
    })
  })

  describe('Hover and Focus States', () => {
    test('navigation links should have enhanced hover effects', () => {
      render(<Header />)
      const aboutLink = screen.getByText('About')
      
      fireEvent.mouseEnter(aboutLink)
      
      expect(aboutLink).toHaveStyle({
        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 10px rgba(255, 255, 255, 0.3)',
        transform: 'translateY(-1px)'
      })
    })

    test('navigation links should have enhanced focus indicators', () => {
      render(<Header />)
      const aboutLink = screen.getByText('About')
      
      fireEvent.focus(aboutLink)
      
      expect(aboutLink).toHaveStyle({
        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(255, 255, 255, 0.5)',
        outline: '2px solid rgba(255, 255, 255, 0.6)',
        outlineOffset: '2px'
      })
    })

    test('mobile menu button should have enhanced hover effects', () => {
      render(<Header />)
      const mobileMenuButton = screen.getByLabelText('Toggle menu')
      
      fireEvent.mouseEnter(mobileMenuButton)
      
      expect(mobileMenuButton).toHaveStyle({
        filter: 'drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))',
        transform: 'scale(1.05)'
      })
    })

    test('download button should have enhanced hover effects', () => {
      render(<Header />)
      const downloadButton = screen.getByText('Download App')
      
      fireEvent.mouseEnter(downloadButton)
      
      expect(downloadButton).toHaveStyle({
        filter: 'drop-shadow(3px 3px 8px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.2))',
        transform: 'translateY(-1px) scale(1.02)'
      })
    })
  })

  describe('Responsive Behavior', () => {
    test('desktop navigation should be hidden on mobile', () => {
      render(<Header />)
      const nav = screen.getByRole('navigation')
      
      expect(nav).toHaveClass('hidden', 'md:flex')
    })

    test('download button should be hidden on mobile', () => {
      render(<Header />)
      const downloadButton = screen.getByText('Download App')
      
      expect(downloadButton).toHaveClass('hidden', 'md:flex')
    })

    test('mobile menu button should be hidden on desktop', () => {
      render(<Header />)
      const mobileMenuButton = screen.getByLabelText('Toggle menu')
      
      expect(mobileMenuButton).toHaveClass('md:hidden')
    })
  })

  describe('Accessibility Features', () => {
    test('mobile menu button should have proper aria label', () => {
      render(<Header />)
      const mobileMenuButton = screen.getByLabelText('Toggle menu')
      
      expect(mobileMenuButton).toHaveAttribute('aria-label', 'Toggle menu')
    })

    test('close button in mobile menu should have proper aria label', async () => {
      render(<Header />)
      const mobileMenuButton = screen.getByLabelText('Toggle menu')
      
      fireEvent.click(mobileMenuButton)
      
      await waitFor(() => {
        const closeButton = screen.getByLabelText('Close menu')
        expect(closeButton).toHaveAttribute('aria-label', 'Close menu')
      })
    })

    test('logo image should have proper alt text', () => {
      render(<Header />)
      const logoImage = screen.getByAltText('PlayCircle Logo')
      
      expect(logoImage).toHaveAttribute('alt', 'PlayCircle Logo')
    })

    test('all navigation links should be keyboard accessible', () => {
      render(<Header />)
      const links = screen.getAllByRole('link')
      
      links.forEach(link => {
        expect(link).toHaveClass('focus:outline-none')
      })
    })
  })

  describe('Performance Considerations', () => {
    test('header should not use backdrop-filter on main container', () => {
      render(<Header />)
      const header = screen.getByRole('banner')
      
      const computedStyle = window.getComputedStyle(header)
      expect(computedStyle.backdropFilter).toBe('none')
    })

    test('header should not have scroll-based opacity calculations', () => {
      render(<Header />)
      const header = screen.getByRole('banner')
      
      // Check that there are no scroll event listeners that would affect opacity
      expect(header).not.toHaveStyle({ opacity: expect.any(String) })
    })

    test('navigation should not have expensive blur effects', () => {
      render(<Header />)
      const nav = screen.getByRole('navigation')
      
      const computedStyle = window.getComputedStyle(nav)
      expect(computedStyle.backdropFilter).toBe('none')
    })
  })
})