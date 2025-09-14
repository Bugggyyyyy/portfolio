export default function Card({ width = "328px", height = "320px", className = "", children }) {
    return (
      <div
        className={`relative border border-white/30 bg-white/2 backdrop-blur-md rounded-3xl shadow-lg p-6 ${className}`}
        style={{ width, height }}
      >
        {children}
      </div>
    );
  }
  