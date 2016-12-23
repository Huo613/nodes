function centor(instr){
  for(idx in censorWorlds){
     instr= instr.replace(censorWorlds[idx],"****");
  }
  for (idx in  customerCensorWorlds) {
  	instr=instr.replace(customerCensorWorlds[idx],"%%%%%%");
  }
  return instr;
}
function addCensorWorld(world){
  customerCensorWorlds.push(world);
}
function getCensorWorld(){
	return  censorWorlds.concat(customerCensorWorlds);
}
export centor=centor;
export addCensorWorld=addCensorWorld
export getCensorWorld=getCensorWorld