import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.profile_wrapper}>
            <div className={style.template_img__wrapper}>
                <img className={style.template_img} src="https://wallpaperaccess.com/full/1282257.jpg" alt="template"/>
            </div>
            <div className={style.profile_info}>
                <div className={style.avatar_wrapper}>
                    <div className={style.avatar}></div>
                    <div className={style.userName}>Elon Musk</div>
                </div>
                <div className={style.profile_description}>
                    <ul className={style.user_info}>
                        <li className={style.info_item}>city: Boca-chica, Texas</li>
                        <li className={style.info_item}>age: 50</li>
                        <li className={style.info_item}>SpaceX, Tesla, Neuralink, the Borning Company</li>
                    </ul>
                </div>
            </div>
            <div className={style.posts}>My posts</div>
        </div>
    );
}

export default Profile;