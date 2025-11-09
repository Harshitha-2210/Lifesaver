export default function Footer() {
  return (
    <footer className="bg-[#f9e6e6] text-gray-800 py-4 mt-auto border-t border-red-300">
      <div className="text-center text-sm">
        <p className="font-medium">
          © {new Date().getFullYear()} LifeSaver - Blood Donation System
        </p>
        <p className="text-xs pt-1 opacity-70">
          Developed as part of Community Service Project | Save Lives ❤️
        </p>
      </div>
    </footer>
  );
}
