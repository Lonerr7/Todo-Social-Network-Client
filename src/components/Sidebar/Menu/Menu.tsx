import s from './Menu.module.scss';
import { MdOutlineContactPage } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { RiTodoLine } from 'react-icons/ri';
import { IoSettingsSharp } from 'react-icons/io5';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';
import MenuItem from '../../common/MenuItem/MenuItem';
import { useAppSelector } from '../../../hooks/reduxToolkitHooks';
import { selectUsersWithoutMe } from '../../../redux/selectors/usersSelectors';
import {MenuItemsConfig, ItemsCountMapperType} from './config/MenuConfig';



const Menu: React.FC = () => {
  const activeNum = useAppSelector((state) => state.app.activeMenuNum);
  const uncompletedTodosCount = useAppSelector(
    (state) => state.todo.todos
  ).filter((t) => !t.isCompleted).length;
  const chatMessagesCount = useAppSelector(
    (state) => state.chat.messages
  ).length;
  const usersCount = useAppSelector(selectUsersWithoutMe)?.length;

  const getMappedItemsCount = (mappedKeyToSelector: ItemsCountMapperType | undefined) => {
    switch (mappedKeyToSelector) {
      case "uncompletedTodos":
        return uncompletedTodosCount;
      case 'chatMessages':
        return chatMessagesCount;
      case 'users':
        return usersCount;
      default:
        return 0;
    }
  };

  return (
    <nav className={s.menu}>
      <ul className={s.menu__list}>
        {MenuItemsConfig.map((itemObj, i) => {
          const IconComponent = itemObj.Icon;

          return (
            <MenuItem
              key={itemObj.id}
              customClass={s.menu__menuItem}
              customTextClass={s.menu__menuItemText}
              customActiveLineClass={s.menu__menuItemActiveLine}
              activeNum={activeNum}
              neededNum={i + 1}
              text={itemObj.text}
              urlPath={itemObj.urlPath}
              icon={<IconComponent className={s.menu__icon} />}
              itemsCount={getMappedItemsCount(itemObj.itemsCountMapper)}
            />
          )
        })}
      </ul>
    </nav>
  );
};

export default Menu;
