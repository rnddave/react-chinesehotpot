import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart-context';

import { signOutUser } from '../../utils/firebase/firebase.utils';


import './main-menu.styles.scss'

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { cartShow } = useContext(CartContext);

  // console.log(currentUser);
  return (
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
              <Logo className='logo' />
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>

            {currentUser ? (
              <span className='nav-link' onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
            )}

            <CartIcon />

          </div>
          
          {cartShow && <CartDropdown />}

        </div>
        <Outlet />
      </Fragment>
    );
};

export default Navigation;


