import TrinaryHome from './home';
import TrinaryProfile from './profile';
function TrinaryPage(props) {
    let contents = [];
    // if (props.viewing === 'home') {
    //     contents.push((<TrinaryHome/>));
    // }
    // if (props.viewing === 'team') {
    //     contents.push((<TrinaryProfile whom="Ty"/>));
    //     contents.push((<TrinaryProfile whom="Sergio"/>));
    //     contents.push((<TrinaryProfile whom="Brandon"/>));
    // }
    //for now though:
    contents.push((<TrinaryHome/>));
    contents.push((<TrinaryProfile whom="Ty"/>));
    contents.push((<TrinaryProfile whom="Sergio"/>));
    contents.push((<TrinaryProfile whom="Brandon"/>));


    return (
      <div className={"TrinaryPage " + props.art_class}>
        {contents}
      </div>
    );
  }
  
  export default TrinaryPage;