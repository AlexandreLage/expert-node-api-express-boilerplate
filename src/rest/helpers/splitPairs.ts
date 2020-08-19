import { HasFailed, Coordinates } from '../models/interfaces'


export default function splitPairs (arr: Array<Coordinates | HasFailed>) {
  var res = [],
    l = arr.length
  for (var i = 0; i < l; ++i)
    for (var j = i + 1; j < l; ++j) res.push([arr[i], arr[j]])
  return res
}
