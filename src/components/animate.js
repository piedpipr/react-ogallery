import {motion} from "framer-motion"
import {SingleImage} from './image';

export default function AnimateItem({data, selectItemsHandler}){
    return(
      <motion.div layout>
        <SingleImage item={data} selectItemsHandler={selectItemsHandler}/>
      </motion.div>
    )
  }