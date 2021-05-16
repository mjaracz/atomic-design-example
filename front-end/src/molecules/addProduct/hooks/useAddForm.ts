import { ChangeEvent, useState } from 'react'
import { ValidationError } from 'atoms/textFields/types'
import { checkQuantity, checkPrice, checkProductName } from 'utils/validation'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from 'organisms/products/redux/actions/products'
import { RootState } from 'redux/types'

export const useAddForm = () => {
  const [productName, setProductName] = useState('')
  const [price, setPrice] = useState('')
  const [currency, setCurrency] = useState('')
  const [typeOfProduct, setTypeOfProduct] = useState('')
  const [quantity, setQuantity] = useState('')

  const [productNameError, setProductNameError] = useState<ValidationError>({ isError: false })
  const [priceError, setPriceError] = useState<ValidationError>({ isError: false })
  const [quantityError, setQuantityError] = useState<ValidationError>({ isError: false })
  const { userProfile: { error, profile: { userId } }, signIn: { jwtToken }, products: { loading, addProduct } } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const saveName = (event: ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value)
  }
  const savePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value)
  }
  const saveCurrency = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value)
  }
  const saveQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value)
  }
  const saveTypeOfProduct = (event: ChangeEvent<HTMLInputElement>) => {
    setTypeOfProduct(event.target.value)
  }
  const sendAddedProduct = () => {
    const priceInt = parseInt(price, 10)
    const quantityInt = parseInt(quantity, 10)
    if (!isInvalidAddedProduct())
      dispatch(addProducts({name: productName, currency, price: priceInt, quantity: quantityInt, type: typeOfProduct, userId}))
  }
  const isInvalidAddedProduct = () => {
    setProductNameError(checkProductName(productName))
    setPriceError(checkPrice(price))
    setQuantityError(checkQuantity(quantity))
    return (
      checkProductName(productName).isError ||
      checkPrice(price).isError ||
      checkQuantity(quantity).isError
    )
  }

  return {
    productNameError,
    priceError,
    quantityError,
    currency,
    typeOfProduct,
    saveName,
    savePrice,
    saveCurrency,
    saveQuantity,
    sendAddedProduct,
    saveTypeOfProduct,
    error,
    jwtToken,
    loading,
    addProduct
  }
}