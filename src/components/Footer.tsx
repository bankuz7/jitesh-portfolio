export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-6 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted/60">
          &copy; {new Date().getFullYear()} Jitesh
        </p>
        <p className="text-xs text-muted/60">
          Built with Next.js &amp; Tailwind
        </p>
      </div>
    </footer>
  );
}
