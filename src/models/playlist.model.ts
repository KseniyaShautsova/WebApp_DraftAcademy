export interface PlayListModel{
    "name": string,
    "owner": string,
    "slug": string,
    "spotifyId": string,
    "color": string,
}

export interface PlayListModelWithId extends PlayListModel{
    id : string,
}