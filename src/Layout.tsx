import NavBar from "./NavBar.tsx"
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps){
  return (
    <div className="app-layout">
      <header>
        <NavBar/>
      </header>
      <main className="page-content">{children}</main>
    </div>
  );
}