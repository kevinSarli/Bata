import { ItemAdmin } from './ItemAdmin'

export const AdminList = ({ itemList }) => {

    return <section className='itemlist-container'>
        {itemList.map(item => {
            return <ItemAdmin {...item} key={item.id} />
        })}
    </section>

}