import { Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';

import { ReactComponent as Logo } from '../../assets/chinese-hotpot.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart-context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

// we are now using styled-components instead of scss,
// meaning we need to import more from the 'styleshee' 
// but the benefits include uniquly generated names which moves us away from CSS name clashes
import {
  NavigationContainer,
  NavLinks,
  LogoContainer,
  NavLink,
} from './main-menu.styles'

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { cartShow } = useContext(CartContext);

  // console.log(currentUser);
  return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
              <Logo className='logo' />
          </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>
              SHOP
            </NavLink>

            {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to='/auth'>
                SIGN IN
              </NavLink>
            )}

            <CartIcon />

          </NavLinks>
          
          {cartShow && <CartDropdown />}

        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
};

export default Navigation;


