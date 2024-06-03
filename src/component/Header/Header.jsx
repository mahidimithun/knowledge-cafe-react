import profile from '../../assets/image/profile.png'

const Header = () => {
    return (
        <div>
            <h1 className='text-5xl bg-slate-600'>Knowledge Caffe</h1>
            <img src={profile} alt="" />

        </div>
    );
};

export default Header;