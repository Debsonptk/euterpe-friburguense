import { Dispatch, memo, ReactElement, SetStateAction } from 'react'

import { AiFillCloseCircle, AiFillHome } from 'react-icons/ai'
import { BiSolidBook } from 'react-icons/bi'
import { FaRegCalendarAlt, FaUserFriends } from 'react-icons/fa'
import { GiFrenchHorn } from 'react-icons/gi'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import { MenuContainer, MenuOverlay } from './styles'

interface IMenuMobileProps {
  children?: React.ReactNode
  menuIsVisible: boolean
  setMenuIsVisible: Dispatch<SetStateAction<boolean>>
}

const MenuMobile: React.FC<IMenuMobileProps> = ({
  children,
  menuIsVisible,
  setMenuIsVisible,
}) => {
  children as ReactElement
  return (
    <>
      <MenuOverlay
        menuIsVisible={menuIsVisible}
        onClick={() => setMenuIsVisible(false)}
        className="position-fixed"
      />

      <MenuContainer isVisible={menuIsVisible}>
        <AiFillCloseCircle
          color="white"
          type="button"
          size={30}
          onClick={() => setMenuIsVisible(false)}
        />
        <nav className="pt-5">
          <Link to="/" className="pt-5">
            <AiFillHome size={20} />
            <span className="px-2">Home</span>
          </Link>
          <Link to="/historia">
            <BiSolidBook size={20} />
            <span className="px-2">História</span>
          </Link>
          <Link to="/musicos">
            <GiFrenchHorn size={25} />
            <span className="px-2">Músicos</span>
          </Link>
          <Link to="/fotos">
            <HiOutlinePhotograph size={25} />
            <span className="px-2">Fotos</span>
          </Link>
          <Link to="/eventos">
            <FaRegCalendarAlt size={20} />
            <span className="px-2">Eventos</span>
          </Link>
          <Link to="/seja-socio">
            <FaUserFriends size={20} />
            <span className="px-2">Seja Sócio</span>
          </Link>
        </nav>
      </MenuContainer>
    </>
  )
}
export default memo(MenuMobile)
