import { useContext } from 'react';
import CartContext from '../../../store/Cart/CartContext';
import CartItem from '../../Cart/CartItem';
import Modal from '../Modal';
import styles from './style.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {};
  const cartItemRemoveHandler = (item) => {};

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={`${item.id} ${Math.random()}`}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item.id)}
          onRemove={cartItemRemoveHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button
          className={styles['button--alt']}
          onClick={props.onClose}
        >
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
