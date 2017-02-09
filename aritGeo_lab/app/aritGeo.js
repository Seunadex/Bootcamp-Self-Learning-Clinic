module.exports = {

aritGeo :function (arr) {
  
  if (arr.length < 1){
    return 0;
  }
  
  
  var arithBaseComparison = arr[1] - arr[0];
  var geoRatio = arr[1] / arr[0];
  var isArithProgression
  var isGeoProgression;

  for(var i = 2; i < arr.length; i++){
    if(arr[i] - arr[i - 1] === arithBaseComparison )
      isArithProgression = true;
    else
      isArithProgression = false;
    
    if(arr[i] / arr[i - 1] === geoRatio)
      isGeoProgression = true;
    else
      isGeoProgression = false;
  }
  
  if(isArithProgression)
    return "Arithmetic";
  else if(isGeoProgression)
    return "Geometric";
  else
  return -1;

}
};
