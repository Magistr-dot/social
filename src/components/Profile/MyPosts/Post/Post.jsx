import s from './Post.module.css'

const Post = (props) => {
    return (
            <div className={`${s.item}`}>
                {props.message}
                <img src='https://get.wallhere.com/photo/face-women-model-portrait-hat-photography-fashion-Person-skin-romance-girl-beauty-eye-woman-lady-photograph-portrait-photography-photo-shoot-organ-128165.jpg'/>
                {props.like}
            </div>
    );
}
export default Post