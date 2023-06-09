import "./header.css";
export default function Header() {
    return (
        <header class="site-header">
            <div class="header-inner">
                <h2 class="logo-text">
                    <mark>React</mark>Movie App
                </h2>
                <ul class="header-list">
                    <li class="header-item">Home</li>
                    <li class="header-item">New Movies</li>
                    <li class="header-item">About Web Site</li>
                    <li class="header-item">Horror films</li>
                </ul>
            </div>
        </header>
    );
}
