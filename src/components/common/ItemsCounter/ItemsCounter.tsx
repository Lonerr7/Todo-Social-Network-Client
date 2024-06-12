import s from './ItemsCounter.module.scss';

interface ItemsCounterProps {
  quantity: number;
  customClass?: string;
}

const ItemsCounter: React.FC<ItemsCounterProps> = ({
  quantity,
  customClass,
}) => {
  return (
    <span className={`${s.itemsCounter} ${customClass}`}>
      {quantity <= 99 ? quantity : 99}
      {quantity > 99 ? <span className={s.itemsCounter__plus}>+</span> : null}
    </span>
  );
};

export default ItemsCounter;
