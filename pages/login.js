export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <h1>Halaman Login</h1>

      <button
        onClick={() => {
          document.cookie = "token=1234; path=/";
        }}
        className="btn btn-primary d-block"
      >
        Login
      </button>
    </div>
  );
}
