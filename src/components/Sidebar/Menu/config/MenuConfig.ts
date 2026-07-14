import {MdOutlineContactPage} from "react-icons/md";
import {FaUserFriends} from "react-icons/fa";
import {BsFillChatLeftDotsFill} from "react-icons/bs";
import {RiTodoLine} from "react-icons/ri";
import {IoSettingsSharp} from "react-icons/io5";
import {IconType} from "react-icons";
import {nanoid} from "nanoid";

export type ItemsCountMapperType = 'uncompletedTodos' | 'chatMessages' | 'users';

interface MenuItem {
  id: string;
  text: string;
  Icon: IconType;
  urlPath: string;
  itemsCountMapper?: ItemsCountMapperType;
}

export const MenuItemsConfig: MenuItem[] = [
  {id: nanoid(), text: 'My Page', Icon: MdOutlineContactPage, urlPath: '/'},
  {id: nanoid(), text: 'Users', Icon: FaUserFriends, urlPath: '/users?page=1', itemsCountMapper: 'users'},
  {id: nanoid(), text: 'Chat', Icon: BsFillChatLeftDotsFill, urlPath: '/chat', itemsCountMapper: 'chatMessages'},
  {id: nanoid(), text: 'Todos', Icon: RiTodoLine, urlPath: '/todos', itemsCountMapper: 'uncompletedTodos'},
  {id: nanoid(), text: 'Settings', Icon: IoSettingsSharp, urlPath: '/settings'},
];