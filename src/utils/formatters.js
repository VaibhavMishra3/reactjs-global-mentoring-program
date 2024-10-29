export const formatGenres = genres => genres.join(', ');

export const formatYear = date => new Date(date).getFullYear();

export const formatRuntime = runtime => `${Math.trunc(runtime / 60)}h ${runtime % 60}min`;
