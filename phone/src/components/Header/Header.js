import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectUsers } from '../../store/slices/users/usersSlice';
import { filterProducts, resetFilteredProducts, selectProducts, setOpacity } from '../../store/slices/products/productsSlice';
import { useEffect, useRef, useState } from 'react';
import { CartProduct } from '../CartProduct/CartProduct';
import s from './Header.module.css';

export default function Header() {
    const { currentUser } = useSelector(selectUsers);
    const { productsData } = useSelector(selectProducts);
    const myCartRef = useRef(null);
    const userStatsRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (Array.isArray(currentUser?.cartProducts)) {
            setTotalPrice(currentUser.cartProducts.reduce((a, b) => a + b.totalPrice, 0));
        } else {
            setTotalPrice(0);
        }
    }, [currentUser]);

    function logOutFunction(e) {
        e.preventDefault();
        e.stopPropagation();
        dispatch(logOut());
        navigate('/');
    }

    function showCart() {
        myCartRef.current.classList.toggle(s.showCart);
        setActive(!active);
    }

    function checkSearch(value, opacity) {
        const filteredProducts = productsData?.filter(product =>
            product.title.toLowerCase().includes(value.toLowerCase())
        );

        if (filteredProducts?.length) {
            dispatch(filterProducts(filteredProducts));
            dispatch(setOpacity(opacity));
        } else {
            dispatch(resetFilteredProducts());
            dispatch(setOpacity(!opacity));
        }
    }

    function inputHandler(e) {
        let value = e.target.value.trim();
        checkSearch(value, true);
        if (!value) dispatch(setOpacity(false));
    }

    function handlerSubmit(e) {
        e.preventDefault();
        const [search] = e.target;
        checkSearch(search.value, false);
    }

    return (
        <header>
            <div className={s.header__content}>
                <button className={s.logo}>LOGO</button>
                <form className={s.search} onSubmit={handlerSubmit}>
                    <input type="text" placeholder='Search here' onChange={inputHandler} />
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
                {currentUser ? (
                    <div className={s.header__right}>
                        <button className={`${s.shoppingCard} ${active ? s.cartActive : ''}`} onClick={showCart}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                        <div className={s.user} onClick={() => userStatsRef.current.classList.toggle(s.showUserStats)}>
                            <img name='img' src={currentUser?.avatar} alt="User Avatar" />
                            <div ref={userStatsRef} className={s.userStats}>
                                <p>{currentUser?.name} {currentUser?.lastname}</p>
                                <div className={s.userLogOut}>
                                    <button onClick={logOutFunction}>Log Out</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div ref={myCartRef} className={s.shopCart}>
                                {Array.isArray(currentUser?.cartProducts) && currentUser.cartProducts.length > 0 ? (
                                    <p className={s.totalBox}>Total: <span className={s.totalPrice}>{currentUser?.cartTotalPrice || totalPrice} $</span></p>
                                ) : (
                                    <p className={s.totalBox}>Cart is empty :(</p>
                                )}
                                <div className={s.cartItems}>
                                    {Array.isArray(currentUser?.cartProducts) && currentUser.cartProducts.map(product => (
                                        <CartProduct showCart={showCart} key={product?.id} product={product} />
                                    ))}
                                </div>
                            </div>
                            <div className={s.countList}>
                                <p className={s.productCountList}>{Array.isArray(currentUser?.cartProducts) ? currentUser.cartProducts.length : 0}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={s.signButtons}>
                        <Link to='/'>Sign In</Link>
                        <Link to='/registration'>Sign Up</Link>
                    </div>
                )}
            </div>
        </header>
    );
}