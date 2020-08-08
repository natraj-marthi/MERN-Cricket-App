import axios from 'axios'


const http = axios.create({
  baseURL: 'http://localhost:3030/cricket/api'
})

export function getPlayers () {
 return http.get(`/players`);
}

export function getPlayer(id) {
  return http.get(`/players/${id}`);
}

export function deletePlayer(id) {
  return http.delete(`/players/${id}`);
}

export function createPlayer(player){
  return http.post('/players', player, {
    headers: {
      'Content-Type': 'Application/json'
    }
  })
}

export function updatePlayer(player){
  console.log(player)
  return http.patch(`/players/${player.id}`, player, {
    headers: {
      'Content-Type': 'Application/json'
    }
  })
}
// export const getPlayers = () => {
  // return axios.get(`${baseUrl}/players`)
//  }