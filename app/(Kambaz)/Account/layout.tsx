import AccountNavigation from "./Navigation";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-3 col-lg-2 mb-3">
          <AccountNavigation />
        </div>
        <div className="col-12 col-md-9 col-lg-10 mb-3">
          {children}
        </div>
      </div>
    </div>
  );
}
