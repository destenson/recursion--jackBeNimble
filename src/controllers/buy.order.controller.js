var plugin = plugin || {};

/*******************************************
 *              BUY ORDERS
 ******************************************/
plugin.placeBuyOrder = function(){
  plugin.interface.placeBuyOrder();
}

/* Bid just above the best bid */
plugin.bidBetter = function() {
  var bestBid = plugin.getBestBid();
  var newBid = +bestBid + 0.01;
  plugin.setBuyPrice(newBid.toFixed(2));
  plugin.placeBuyOrder();
}

/* bid with the best current bid */
plugin.bidWithBest = function() {
  var bestBid = plugin.getBestBid();
  plugin.setBuyPrice(bestBid);
  plugin.placeBuyOrder();
}

/* bid 1 offset level below the best bid */
plugin.bidBelowBest = function(){
  var bestBid = plugin.getBestBid();
  var newBid = +bestBid - plugin.settings.OFFSET;
  plugin.setBuyPrice(newBid.toFixed(2));
  plugin.placeBuyOrder();
}

/* bid 2 offset levels below best bid */
plugin.bidDoubleBelowBest = function(){
  var bestBid = plugin.getBestBid();
  var newBid = +bestBid - (plugin.settings.OFFSET * 2);
  plugin.setBuyPrice(newBid.toFixed(2));
  plugin.placeBuyOrder();
}

plugin.setBuyPrice = function(p){
  // make sure the bid is in a string format
  if(typeof p !== 'string'){
    p = '' + p;
  }
  plugin.interface.setBuyPrice(p);
}