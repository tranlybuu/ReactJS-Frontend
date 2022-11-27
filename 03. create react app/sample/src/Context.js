import {useContext} from 'react'
import {ThemeContext} from './App'

// ContentApp.js
function ContentApp() {
    const theme = useContext(ThemeContext)
    return (
    <div>
      <p className={theme}>
      Trước đây tôi làm mảng tài chính, lương ba cọc ba đồng không đủ ăn. Người yêu cũ cũng bỏ theo anh đồng nghiệp IT trong cơ quan. Lúc ấy tôi giận lắm. Nhưng cũng chính hắn ta là người đại khai nhãn giới cho tôi. Chỉ ra cho tôi thấy tầm vóc vĩ đại của lĩnh vực IT. Từ đó sáng đi làm, tối tôi ra trung tâm học code quyết tâm đổi đời.
      Ban đầu tôi nghe cũng không tin lắm, nhưng nhìn thực tế chính người phụ nữ yêu tôi 6 năm cũng bị thằng này quyến rũ cái một, lòng tôi cũng muốn đăng kí học IT, dù gì thời điểm đó cuộc đời tôi vốn loser không có gì để mất.
      Nghe lời hắn ta, mình cũng đi học dev được 3 tháng, thấy con người mình khác hẳn, lắng nghe được tiếng sóc kêu, cảm giác được tóc lưa thưa chạm vào trán, phân biệt được chất vải mặc trên ng hằng ngày. Vào thang máy mấy cô đồng nghiệp biết mình chuyển hướng sang CNTT thì bắt chuyện hỏi thăm, rủ đi cafe ... minh đi rồi còn nghe đằng sau họ bàn bạc hợp tác nhau để tán tỉnh mình.
      Trước đây mình vốn thiếu ngủ và ban đêm ngủ rất không ngon giấc, từ lúc chuyển sang lập trình, nhờ những dòng lệnh cài đặt sẵn, mình ngủ ngon hơn cả một đứa bé, mơ những giấc mơ tuyệt vời, góp phần làm cho cuộc sống mình thư thái hơn.
      Về ngoại hình, mình bị béo bụng do stress nhiều, mặt mũi lúc nào cũng đờ đẫn, mập nhưng yếu ngoe, không đánh đấm lại được ai … Chỉ sau một thời gian ngắn học về cơ sở dữ liệu, web và tháo lắp máy tính … Cơ bụng đã xuất hiện, múi nào ra múi nấy, rắn chắc hơn bao giờ hết. Nhờ những thuật toán chạy trong đầu, mình luôn tính toán được điểm yếu của đối phương, ra đòn quyết định. Các bao cát mình tập boxing phải thay liên tục từ ngày mình học IT.
      Với tất cả các thay đổi từ trong ra ngoài, từ thu nhập đến địa vị xã hội, tính cách, tình cảm, ngoại hình và sức khỏe đều theo hướng tích cực hơn, em xin chốt lại vấn đề muốn review : Những gì vozer tả về ngành CNTT cũng có đúng có sai, ngành nào có làm cũng mới có ăn. Lợi ích của IT là có nhưng không ảo như nhiểu vozer troll, cái gì cũng phải cố gắng, dấn thân, bản lĩnh đương đầu mới có thành quả.
      </p>
    </div>
    )
  }

export default ContentApp