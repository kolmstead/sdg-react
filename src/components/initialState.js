import focusAreas from './unObject';

const initialState = {
  focusAreasJSON: focusAreas,
  considerLater: [],
  unPick: ["un1", "un2"],
  newPair: ["un1", "un2"],
  unScores: {"un1":0,"un2":0,"un3":0,"un4":0,"un5":0,"un6":0,"un7":0,"un8":0,"un9":0,"un10":0,"un11":0,"un12":0,"un13":0,"un14":0,"un15":0,"un16":0,"un17":0},
  sortedScores: [["un1",0],["un17",0],["un3",0],["un4",0],["un5",0],["un6",0],["un7",0],["un8",0],["un2",0],["un10",0],["un11",0],["un12",0],["un13",0],["un14",0],["un15",0],["un16",0],["un9",0]]
};

export default initialState;