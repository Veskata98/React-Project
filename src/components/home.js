export const Home = (props) => {
    return (
        <header className="header">
            <nav className="header-nav">
                <a className="header-link" href="/">
                    <div className="header-logo-container">
                        <img className="header-brand-logo" src={require('../assets/logo.png')} alt="brand-name" />
                        <img
                            className="header-brand-name"
                            src={require('../assets/gemepedia-text-logo.png')}
                            alt="brand-img"
                        />
                    </div>
                </a>

                <ul className="header-list">
                    <li className="header-item">
                        <a href="/">News</a>
                    </li>
                    <li className="header-item">
                        <a href="/games">Games</a>
                    </li>
                    <li className="header-item">
                        <a href="/platforms">Platforms</a>
                    </li>
                    <li className="header-item">
                        <a href="/forum">Forum</a>
                    </li>
                    <li className="header-item">
                        <a href="/myGames">My Games</a>
                    </li>
                </ul>
                <ul className="user-nav-list">
                    <li className="header-item">
                        <p className="header-item-username">Welcome, {props.username}</p>
                    </li>
                    <li className="header-item">
                        <form className="header-logout-form" action="/auth/logout" method="post">
                            <button className="logout-btn">Logout</button>
                        </form>
                    </li>
                </ul>
                <ul className="user-nav-list">
                    <li className="header-item">
                        <a href="/auth/login">Login</a>
                    </li>
                    <li className="header-item">
                        <a href="/auth/register">Register</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
