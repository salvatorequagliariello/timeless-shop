
const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: 'USD'
  })

interface CurrencyProps {
    value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    return formatter.format(Number(value))
};

export default Currency