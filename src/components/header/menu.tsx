import * as React from 'react';

interface MenuProps {
  handleClick: () => void
}

class Menu extends React.Component<MenuProps> {

  componentDidMount() {
    document.addEventListener('click', this.props.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.handleClick);
  }

  render() {
    return (
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="#" className="menu__link">My account</a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">My tasks</a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">Log out</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;