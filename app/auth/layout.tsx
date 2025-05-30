const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {children}
    </div>
  );
};

export default AuthLayout;
