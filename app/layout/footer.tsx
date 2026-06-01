export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <p>
          © {new Date().getFullYear()} Nandita Mahesh
        </p>
      </div>
    </footer>
  );
}