import '@testing-library/jest-dom/vitest';

class ResizeObserver {
  observe() {}

  unobserve() {}

  disconnect() {}
}

window.ResizeObserver = ResizeObserver;
