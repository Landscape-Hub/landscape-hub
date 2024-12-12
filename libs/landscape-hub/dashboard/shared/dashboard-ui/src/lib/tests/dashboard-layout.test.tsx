import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import DashboardLayout from '../dashboard-layout';

// Mock the components that are not directly related to what we're testing
vi.mock('./components/overview', () => ({
  Overview: () => <div data-testid="overview">Overview Component</div>,
}));

vi.mock('./components/recent-sales', () => ({
  RecentSales: () => <div data-testid="recent-sales">Recent Sales Component</div>,
}));

vi.mock('./components/search', () => ({
  Search: () => <div data-testid="search">Search Component</div>,
}));

describe('DashboardLayout', () => {
  it('renders the dashboard title', () => {
    render(<DashboardLayout />);
    const titleElement = screen.getByRole('heading', { name: /dashboard/i });
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the overview tab by default', () => {
    render(<DashboardLayout />);
    const overviewTab = screen.getByRole('tab', { name: /overview/i });
    expect(overviewTab).toHaveAttribute('aria-selected', 'true');
  });
});
