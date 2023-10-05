export const findMyAvatar = (el) => {

    let path = './avatars/'

    if (el.avatar === 'no-avatar') {
        return `${path}no-avatar.jpg`
    } else {
        return `${path}${el.avatar}.png`
    }
}