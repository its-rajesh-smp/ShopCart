import React from "react";
import {
  Document,
  Image,
  PDFDownloadLink,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { backgroundColor: "gainsboro" },
  header: {
    backgroundColor: "white",
    textAlign: "center",
    padding: "20px",
    margin: "20px",
    borderRadius: "10px",
  },
  container: {
    backgroundColor: "white",
    fontSize: "12px",
    padding: "20px",
    margin: "2px 20px",
    borderRadius: "10px",
  },
  image: {
    width: "50px",
  },
});

const GeneratePdf = (props) => {
  const productData = props.data;
  const orderAddress = productData.orderAddress;
  const orderId = props.orderId;
  return (
    <Document>
      <Page style={styles.page} size={"A4"}>
        <View style={styles.header}>
          <Text>YOUR ORDER</Text>
          <Text>SHOPCART</Text>
          <Image
            style={styles.image}
            src={"https://cdn-icons-png.flaticon.com/512/3081/3081415.png"}
          />
        </View>

        <view style={styles.container}>
          <Text>{productData.title}</Text>
          <Text>{productData.brand}</Text>
          <Text>{productData.category}</Text>
          <Text>{productData.description}</Text>
        </view>

        <view style={styles.container}>
          <Text>Name: {orderAddress.name}</Text>
          <Text>Mobile: {orderAddress.mobile}</Text>
          <Text>Landmark: {orderAddress.landmark}</Text>
          <Text>Area: {orderAddress.area}</Text>
          <Text>Pincode: {orderAddress.pincode}</Text>
        </view>

        <view style={styles.container}>
          <Text>Product Price: {productData.price}</Text>
          <Text>Quantity: {productData.quantity}</Text>
          <Text>Total Price: {productData.price * productData.quantity}</Text>
          <Text>Payment: {"CASH ON DELIVERY"}</Text>
        </view>

        <view style={styles.container}>
          <Text>Order Id: {orderId}</Text>
        </view>
      </Page>
    </Document>
  );
};

export { GeneratePdf };

/* -------------------------------------------------------------------------- */
/*                                 DOWNLOADBTN                                */
/* -------------------------------------------------------------------------- */
const DownloadPdfBtn = (props) => {
  return (
    <PDFDownloadLink
      document={<GeneratePdf orderId={props.orderId} data={props.data} />}
      fileName={`${props.orderId}.pdf`}
    >
      {({ loading }) =>
        loading ? (
          <button className="downloadInvoiceBtn" disabled={true}>
            Loading
          </button>
        ) : (
          <button className="downloadInvoiceBtn">Download</button>
        )
      }
    </PDFDownloadLink>
  );
};

export default DownloadPdfBtn;
