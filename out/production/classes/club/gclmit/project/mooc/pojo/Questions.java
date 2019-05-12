package club.gclmit.project.mooc.pojo;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.AccessLevel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author 孤城落寞
 * @since 2019-05-10
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("mooc_questions")
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class Questions implements Serializable {

    private static final long serialVersionUID = 1L;

    public interface QuestionSimpleView{};

    public interface QuestionDetailView extends QuestionSimpleView{};

    /**
     * id
     */
    @JsonView(QuestionDetailView.class)
    @TableId(value = "id", type = IdType.ID_WORKER_STR)
    private String id;

    /**
     * 题目
     */
    @JsonView(QuestionSimpleView.class)
    private String title;

    /**
     * 选项a
     */
    @JsonView(QuestionDetailView.class)
    private String optionA;

    /**
     * 选项b
     */
    @JsonView(QuestionDetailView.class)
    private String optionB;

    /**
     * 选项c
     */
    @JsonView(QuestionDetailView.class)
    private String optionC;

    /**
     * 选项d
     */
    @JsonView(QuestionDetailView.class)
    private String optionD;

    /**
     * 答案选项
     */
    @JsonView(QuestionDetailView.class)
    private String answer;

    /**
     * 答案描述
     */
    @JsonView(QuestionSimpleView.class)
    private String answerString;


    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Questions questions = (Questions) o;
        return Objects.equals(title, questions.title);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, optionA, optionB, optionC, optionD, answer, answerString);
    }

    public Questions(String title, String answerString) {
        this.title = title;
        this.answerString = answerString;
    }

    public Questions(String title, String optionA, String optionB, String optionC, String optionD, String answer, String answerString) {
        this.title = title;
        this.optionA = optionA;
        this.optionB = optionB;
        this.optionC = optionC;
        this.optionD = optionD;
        this.answer = answer;
        this.answerString = answerString;
    }
}
