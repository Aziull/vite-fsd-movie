import { config } from '@/shared/lib'

function isURL(str: string): boolean {
    const pattern = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    return pattern.test(str);
}

export const parseAvatar = (avatar: string): Url => {
    let url: string = avatar;
    if(!isURL(avatar)){
        url = config.API_ENDPOINT.concat(avatar);
    }
    return url;
}
