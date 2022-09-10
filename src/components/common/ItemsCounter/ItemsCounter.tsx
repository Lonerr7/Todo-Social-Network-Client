import s from './ItemsCounter.module.scss';

type ItemsCounterProps = {
  quantity: number;
};

const ItemsCounter: React.FC<ItemsCounterProps> = ({ quantity }) => {
  return (
    <span className={s.itemsCounter}>
      {quantity <= 99 ? quantity : 99}
      {quantity > 99 ? <span className={s.itemsCounter__plus}>+</span> : null}
    </span>
  );
};

export default ItemsCounter;
