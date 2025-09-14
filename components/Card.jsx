export default function Card({ width = "100%", height = "auto", className = "", children }) {
    return (
      <div
        className={`relative border border-white/30 bg-white/2 backdrop-blur-md rounded-3xl shadow-lg p-4 sm:p-6 ${className}`}
        style={{ width, height }}
      >
        {children}
      </div>
    );
  }
  