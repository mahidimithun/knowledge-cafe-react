import profile from '../../assets/image/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-5xl bg-slate-600'>Knowledge Caffe</h1>
            <img src={profile} alt="" />

        </header>
    );
};

export default Header;