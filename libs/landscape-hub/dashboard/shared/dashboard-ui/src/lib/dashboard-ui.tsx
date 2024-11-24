import { Outlet } from 'react-router-dom';

export function DashboardUi() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <h2 className="text-xl text-slate-500 font-bold mb-4 uppercase tracking-widest">
            Dashboard Overview
          </h2>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-gray-300 md:min-h-min">
          {/*bg-muted/50*/}

          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DashboardUi;
