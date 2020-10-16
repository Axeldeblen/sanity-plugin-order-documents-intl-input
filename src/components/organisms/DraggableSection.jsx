import React from "react";
import Spinner from "part:@sanity/components/loading/spinner";
import Preview from "part:@sanity/base/preview";
import schema from "part:@sanity/base/schema";
import styles from "../../index.css";
import { Card } from "../molecules/Card";

class DraggableSection extends React.Component {
  render() {
    const { documents, type } = this.props;

    if (!(type && type.value) && !documents.length) {
      return null;
    }

    if (type && type.value && !documents.length) {
      return (
        <div className={styles.marginTop}>
          <Spinner message="Loading..." center />
        </div>
      );
    }

    return (
      <>
        <hr className={styles.rule} />
        <p>
          <strong>Step 2: Drag and Drop to Re-order</strong>
        </p>
        <ul className={styles.list}>
          {documents.map((document, index) => (
            <li key={document._id} className={styles.listItem}>
              <Card
                key={document._id}
                index={index}
                id={document._id}
                text={document.title}
                moveCard={this.moveCard}
                jsx={<Preview value={document} type={schema.get(document._type)} />}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default DraggableSection;
