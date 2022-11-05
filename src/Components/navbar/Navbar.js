import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import MyCart from "../mycart/MyCart";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <div class="agileits_header">
        <div class="container">
          <div class="w3l_offers">
            <p>
              SALE UP TO 70% OFF. USE CODE "SALE70%" .{" "}
              <a href="/category">SHOP NOW</a>
            </p>
          </div>
          <div class="agile-login">
            <ul>
              <li>
                <a href="/signup"> Create Account </a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/contactUs">Help</a>
              </li>
            </ul>
          </div>
          <div class="product_list_header">
            <div>
              <button
                class="w3view-cart"
                type="submit"
                name="submit"
                value=""
                onClick={onOpen}
              >
                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
              </button>

              <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton />
                  <ModalBody>
                    <MyCart />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
