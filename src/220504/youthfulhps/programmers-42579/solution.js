function solution(genres, plays) {
  const hash = new Map();

  genres.map((genre, index) => [genre, plays[index]])
  .forEach(
    ([genre, play], index) => {
      const current = hash.get(genre) || {total: 0, songs: []};
      
      hash.set(genre, {
        total: current.total + play,
        songs: [...current.songs, {play, index}].sort((a,b) => b.play - a.play).slice(0,2)
      }) 
    }
  )

  return [...hash.entries()]
          .sort((a, b) => b[1].total - a[1].total)
          .flatMap(song => song[1].songs)
          .map(song => song.index)

}